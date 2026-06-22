package openai

import (
	"testing"

	"github.com/QuantumNous/new-api/constant"
	"github.com/QuantumNous/new-api/dto"
	relaycommon "github.com/QuantumNous/new-api/relay/common"
	"github.com/stretchr/testify/require"
)

func TestConvertOpenAIRequestOmitsDeprecatedClaudeSamplingParameters(t *testing.T) {
	temperature := 0.7
	topP := 0.95
	topK := 40
	request := &dto.GeneralOpenAIRequest{
		Model:       "anthropic/claude-opus-4-8",
		Temperature: &temperature,
		TopP:        &topP,
		TopK:        &topK,
	}
	info := &relaycommon.RelayInfo{
		ChannelMeta: &relaycommon.ChannelMeta{
			ChannelType:       constant.ChannelTypeOpenRouter,
			UpstreamModelName: "anthropic/claude-opus-4-8",
		},
	}

	converted, err := (&Adaptor{}).ConvertOpenAIRequest(nil, info, request)

	require.NoError(t, err)
	convertedRequest := converted.(*dto.GeneralOpenAIRequest)
	require.Nil(t, convertedRequest.Temperature)
	require.Nil(t, convertedRequest.TopP)
	require.Nil(t, convertedRequest.TopK)
}

func TestConvertOpenAIRequestKeepsClaudeSamplingParametersForOpus46(t *testing.T) {
	temperature := 0.7
	topP := 0.95
	topK := 40
	request := &dto.GeneralOpenAIRequest{
		Model:       "claude-opus-4-6",
		Temperature: &temperature,
		TopP:        &topP,
		TopK:        &topK,
	}
	info := &relaycommon.RelayInfo{
		ChannelMeta: &relaycommon.ChannelMeta{
			ChannelType:       constant.ChannelTypeOpenAI,
			UpstreamModelName: "claude-opus-4-6",
		},
	}

	converted, err := (&Adaptor{}).ConvertOpenAIRequest(nil, info, request)

	require.NoError(t, err)
	convertedRequest := converted.(*dto.GeneralOpenAIRequest)
	require.Equal(t, &temperature, convertedRequest.Temperature)
	require.Equal(t, &topP, convertedRequest.TopP)
	require.Equal(t, &topK, convertedRequest.TopK)
}
