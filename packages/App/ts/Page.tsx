import * as React from "react";

import * as App from "App";

// CSS

const body = (
  theme: App.Theme,
  background: App.Color = App.Color.primaryBackground,
): React.CSSProperties => ({
  backgroundColor: theme.Colors[background],
  height: "100%",
  position: "absolute",
  width: "100%",
});

const button = (
  theme: App.Theme,
  background: App.Color = App.Color.buttonBackground,
  foreground: App.Color = App.Color.primaryForeground,
  padding: App.Number = App.Number.paddingToButtonEdge,
  margin: App.Number = App.Number.marginBetweenItems,
): React.CSSProperties => ({
  backgroundColor: theme.Colors[background],
  color: theme.Colors[foreground],
  marginLeft: `${theme.Numbers[margin]}px`,
  marginRight: `${theme.Numbers[margin]}px`,
  padding: `${theme.Numbers[padding]}px`,
});

const buttonBox = (
  theme: App.Theme,
  margin: App.Number = App.Number.marginBetweenItems,
): React.CSSProperties => ({
  alignSelf: "center",
  marginTop: `${theme.Numbers[margin]}px`,
});

const content = (
  theme: App.Theme,
  padding: App.Number = App.Number.paddingToPageEdge,
  background: App.Color = App.Color.secondaryBackground,
  borderRadius: App.Number = App.Number.borderRadius,
): React.CSSProperties => ({
  backgroundColor: theme.Colors[background],
  borderRadius: `${theme.Numbers[borderRadius]}px`,
  margin: `${theme.Numbers[padding]}px`,
  width: "fit-content",
});

const heading = (
  theme: App.Theme,
  font: App.Font = App.Font.heading,
  color: App.Color = App.Color.primaryForeground,
  margin: App.Number = App.Number.marginToHeading,
): React.CSSProperties => ({
  alignSelf: "center",
  color: theme.Colors[color],
  marginBottom: `${theme.Numbers[margin]}px`,
  font: theme.Fonts[font][1],
});

const innerContent = (
  theme: App.Theme,
  padding: App.Number = App.Number.paddingToPageEdge,
): React.CSSProperties => ({
  ...vert(),
  padding: `${theme.Numbers[padding]}px`,
});

const input = (
  theme: App.Theme,
  background: App.Color = App.Color.inputBackground,
  foreground: App.Color = App.Color.primaryForeground,
): React.CSSProperties => ({
  backgroundColor: theme.Colors[background],
  color: theme.Colors[foreground],
});

const label = (
  theme: App.Theme,
  font: App.Font = App.Font.normal,
  color: App.Color = App.Color.primaryForeground,
  margin: App.Number = App.Number.marginBetweenItems,
): React.CSSProperties => ({
  color: theme.Colors[color],
  font: theme.Fonts[font][1],
  marginRight: theme.Numbers[margin],
});

const vert = (): React.CSSProperties => ({
  alignItems: "flex-end",
  display: "flex",
  flexDirection: "column",
});

const vertItem = (
  theme: App.Theme,
  margin: App.Number = App.Number.marginBetweenItems,
): React.CSSProperties => ({
  marginBottom: `${theme.Numbers[margin]}px`,
});

// HTML

export const Page = () => {
  const [theme] = React.useState(App.Theme);
  return (
    <div style={body(theme)}>
      <div style={content(theme)}>
        <div style={innerContent(theme)}>
          <span style={heading(theme)}>Space Camp Sign Up</span>
          <div style={vertItem(theme)}>
            <label style={label(theme)}>First Name</label>
            <input style={input(theme)} />
          </div>
          <div style={vertItem(theme)}>
            <label style={label(theme)}>Last Name</label>
            <input style={input(theme)} />
          </div>
          <div style={vertItem(theme)}>
            <label style={label(theme)}>Address</label>
            <input style={input(theme)} />
          </div>
          <div style={vertItem(theme)}>
            <label style={label(theme)}>Favorite Planet</label>
            <input style={input(theme)} />
          </div>
          <div style={buttonBox(theme)}>
            <button style={button(theme)}>Launch</button>
            <button style={button(theme)}>Return to Earth</button>
          </div>
        </div>
      </div>
    </div>
  );
};
