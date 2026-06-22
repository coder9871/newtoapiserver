package model_setting

import (
	"net/http"
	"testing"
)

func TestClaudeSettingsWriteHeadersMergesConfiguredValuesIntoSingleHeader(t *testing.T) {
	settings := &ClaudeSettings{
		HeadersSettings: map[string]map[string][]string{
			"claude-3-7-sonnet-20250219-thinking": {
				"anthropic-beta": {
					"token-efficient-tools-2025-02-19",
				},
			},
		},
	}

	headers := http.Header{}
	headers.Set("anthropic-beta", "output-128k-2025-02-19")

	settings.WriteHeaders("claude-3-7-sonnet-20250219-thinking", &headers)

	got := headers.Values("anthropic-beta")
	if len(got) != 1 {
		t.Fatalf("expected a single merged header value, got %v", got)
	}
	expected := "output-128k-2025-02-19,token-efficient-tools-2025-02-19"
	if got[0] != expected {
		t.Fatalf("expected merged header %q, got %q", expected, got[0])
	}
}

func TestClaudeSettingsWriteHeadersDeduplicatesAcrossCommaSeparatedAndRepeatedValues(t *testing.T) {
	settings := &ClaudeSettings{
		HeadersSettings: map[string]map[string][]string{
			"claude-3-7-sonnet-20250219-thinking": {
				"anthropic-beta": {
					"token-efficient-tools-2025-02-19",
					"computer-use-2025-01-24",
				},
			},
		},
	}

	headers := http.Header{}
	headers.Add("anthropic-beta", "output-128k-2025-02-19, token-efficient-tools-2025-02-19")
	headers.Add("anthropic-beta", "token-efficient-tools-2025-02-19")

	settings.WriteHeaders("claude-3-7-sonnet-20250219-thinking", &headers)

	got := headers.Values("anthropic-beta")
	if len(got) != 1 {
		t.Fatalf("expected duplicate values to collapse into one header, got %v", got)
	}
	expected := "output-128k-2025-02-19,token-efficient-tools-2025-02-19,computer-use-2025-01-24"
	if got[0] != expected {
		t.Fatalf("expected deduplicated merged header %q, got %q", expected, got[0])
	}
}

func TestShouldOmitClaudeSamplingParameters(t *testing.T) {
	tests := []struct {
		name  string
		model string
		want  bool
	}{
		{
			name:  "opus 4.7",
			model: "claude-opus-4-7",
			want:  true,
		},
		{
			name:  "opus 4.7 effort suffix",
			model: "claude-opus-4-7-high",
			want:  true,
		},
		{
			name:  "opus 4.8",
			model: "claude-opus-4-8",
			want:  true,
		},
		{
			name:  "anthropic-prefixed opus 4.8",
			model: "anthropic/claude-opus-4-8",
			want:  true,
		},
		{
			name:  "opus 4.6",
			model: "claude-opus-4-6",
			want:  false,
		},
		{
			name:  "opus 4.5 dated",
			model: "claude-opus-4-5-20251101",
			want:  false,
		},
		{
			name:  "original opus 4 date model",
			model: "claude-opus-4-20250514",
			want:  false,
		},
		{
			name:  "sonnet 4.7 style name",
			model: "claude-sonnet-4-7",
			want:  false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := ShouldOmitClaudeSamplingParameters(tt.model)
			if got != tt.want {
				t.Fatalf("ShouldOmitClaudeSamplingParameters(%q) = %v, want %v", tt.model, got, tt.want)
			}
		})
	}
}
