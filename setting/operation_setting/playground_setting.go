package operation_setting

import (
	"strings"
	"unicode"

	"github.com/QuantumNous/new-api/common"
	"github.com/QuantumNous/new-api/setting/config"
)

type PlaygroundSetting struct {
	SupportedModels string `json:"supported_models"`
}

var playgroundSetting = PlaygroundSetting{
	SupportedModels: "",
}

func init() {
	config.GlobalConfig.Register("playground_setting", &playgroundSetting)
}

func GetPlaygroundSetting() *PlaygroundSetting {
	return &playgroundSetting
}

func GetPlaygroundSupportedModels() []string {
	return ParsePlaygroundSupportedModels(playgroundSetting.SupportedModels)
}

func ParsePlaygroundSupportedModels(raw string) []string {
	raw = strings.TrimSpace(raw)
	if raw == "" {
		return nil
	}

	if strings.HasPrefix(raw, "[") {
		var models []string
		if err := common.UnmarshalJsonStr(raw, &models); err == nil {
			return normalizePlaygroundModelList(models)
		}
	}

	models := strings.FieldsFunc(raw, func(r rune) bool {
		return r == ',' ||
			r == '，' ||
			r == ';' ||
			r == '；' ||
			unicode.IsSpace(r)
	})
	return normalizePlaygroundModelList(models)
}

func IsPlaygroundModelAllowed(modelName string) bool {
	modelName = strings.TrimSpace(modelName)
	if modelName == "" {
		return false
	}

	supportedModels := GetPlaygroundSupportedModels()
	if len(supportedModels) == 0 {
		return true
	}

	for _, supportedModel := range supportedModels {
		if supportedModel == modelName {
			return true
		}
	}
	return false
}

func FilterPlaygroundModels(models []string) []string {
	supportedModels := GetPlaygroundSupportedModels()
	if len(supportedModels) == 0 {
		return models
	}

	supportedSet := make(map[string]struct{}, len(supportedModels))
	for _, modelName := range supportedModels {
		supportedSet[modelName] = struct{}{}
	}

	filtered := make([]string, 0, len(models))
	for _, modelName := range models {
		if _, ok := supportedSet[modelName]; ok {
			filtered = append(filtered, modelName)
		}
	}
	return filtered
}

func normalizePlaygroundModelList(models []string) []string {
	seen := make(map[string]struct{}, len(models))
	normalized := make([]string, 0, len(models))

	for _, modelName := range models {
		modelName = strings.TrimSpace(modelName)
		if modelName == "" {
			continue
		}
		if _, ok := seen[modelName]; ok {
			continue
		}
		seen[modelName] = struct{}{}
		normalized = append(normalized, modelName)
	}

	return normalized
}
