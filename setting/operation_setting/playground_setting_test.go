package operation_setting

import (
	"reflect"
	"testing"
)

func TestParsePlaygroundSupportedModels(t *testing.T) {
	tests := []struct {
		name string
		raw  string
		want []string
	}{
		{
			name: "empty",
			raw:  " \n ",
			want: nil,
		},
		{
			name: "delimited",
			raw:  "gpt-4o, claude-3-5-sonnet\n gemini-2.5-pro，gpt-4o",
			want: []string{"gpt-4o", "claude-3-5-sonnet", "gemini-2.5-pro"},
		},
		{
			name: "json array",
			raw:  `["gpt-4o"," claude-3-5-sonnet ","gpt-4o",""]`,
			want: []string{"gpt-4o", "claude-3-5-sonnet"},
		},
		{
			name: "invalid json falls back to delimiters",
			raw:  `[gpt-4o,claude-3-5-sonnet]`,
			want: []string{"[gpt-4o", "claude-3-5-sonnet]"},
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			got := ParsePlaygroundSupportedModels(test.raw)
			if !reflect.DeepEqual(got, test.want) {
				t.Fatalf("ParsePlaygroundSupportedModels() = %#v, want %#v", got, test.want)
			}
		})
	}
}

func TestFilterPlaygroundModels(t *testing.T) {
	original := playgroundSetting.SupportedModels
	t.Cleanup(func() {
		playgroundSetting.SupportedModels = original
	})

	models := []string{"gpt-4o", "claude-3-5-sonnet", "gemini-2.5-pro"}

	playgroundSetting.SupportedModels = ""
	if got := FilterPlaygroundModels(models); !reflect.DeepEqual(got, models) {
		t.Fatalf("empty setting should not filter models, got %#v", got)
	}

	playgroundSetting.SupportedModels = "gemini-2.5-pro,gpt-4o"
	want := []string{"gpt-4o", "gemini-2.5-pro"}
	if got := FilterPlaygroundModels(models); !reflect.DeepEqual(got, want) {
		t.Fatalf("FilterPlaygroundModels() = %#v, want %#v", got, want)
	}
}

func TestIsPlaygroundModelAllowed(t *testing.T) {
	original := playgroundSetting.SupportedModels
	t.Cleanup(func() {
		playgroundSetting.SupportedModels = original
	})

	playgroundSetting.SupportedModels = ""
	if !IsPlaygroundModelAllowed("gpt-4o") {
		t.Fatal("empty setting should allow non-empty model")
	}
	if IsPlaygroundModelAllowed("") {
		t.Fatal("empty model should be rejected")
	}

	playgroundSetting.SupportedModels = "gpt-4o"
	if !IsPlaygroundModelAllowed("gpt-4o") {
		t.Fatal("configured model should be allowed")
	}
	if IsPlaygroundModelAllowed("claude-3-5-sonnet") {
		t.Fatal("unconfigured model should be rejected")
	}
}
