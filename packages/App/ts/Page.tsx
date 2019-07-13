import * as React from "react";

import * as App from "App";

// CSS

const body = (theme: App.Theme): React.CSSProperties => ({
  backgroundColor: theme.Colors.primaryBackground,
  height: "100%",
  position: "absolute",
  width: "100%",
});

const button = (
  theme: App.Theme,
  backgroundColor = App.Color.buttonBackground,
): React.CSSProperties => ({
  backgroundColor: theme.Colors[backgroundColor],
  border: "none",
  borderRadius: `${theme.Numbers.borderRadius}px`,
  color: theme.Colors.primaryForeground,
  font: theme.Fonts.normal[1],
  marginLeft: `${theme.Numbers.marginBetweenItems}px`,
  marginRight: `${theme.Numbers.marginBetweenItems}px`,
  padding: `${theme.Numbers.paddingToButtonEdge}px`,
});

const buttonBox = (theme: App.Theme): React.CSSProperties => ({
  alignSelf: "center",
  marginTop: `${theme.Numbers.marginBetweenItems}px`,
});

const content = (theme: App.Theme): React.CSSProperties => ({
  backgroundColor: theme.Colors.secondaryBackground,
  borderRadius: `${theme.Numbers.borderRadius}px`,
  margin: `${theme.Numbers.paddingToPageEdge}px`,
  width: "fit-content",
});

const heading = (theme: App.Theme): React.CSSProperties => ({
  alignSelf: "center",
  color: theme.Colors.primaryForeground,
  marginBottom: `${theme.Numbers.marginToHeading}px`,
  font: theme.Fonts.heading[1],
});

const innerContent = (theme: App.Theme): React.CSSProperties => ({
  ...vert(),
  padding: `${theme.Numbers.paddingToPageEdge}px`,
});

const input = (theme: App.Theme): React.CSSProperties => ({
  backgroundColor: theme.Colors.inputBackground,
  border: "none",
  color: theme.Colors.primaryForeground,
  font: theme.Fonts.normal[1],
  padding: `${theme.Numbers.paddingToInputEdge}px`,
});

const label = (theme: App.Theme): React.CSSProperties => ({
  color: theme.Colors.primaryForeground,
  font: theme.Fonts.normal[1],
  marginRight: theme.Numbers.marginBetweenItems,
});

const vert = (): React.CSSProperties => ({
  alignItems: "flex-end",
  display: "flex",
  flexDirection: "column",
});

const vertItem = (theme: App.Theme): React.CSSProperties => ({
  marginBottom: `${theme.Numbers.marginBetweenItems}px`,
});

// HTML

export const Page = () => {
  const [theme] = React.useState(App.Theme);
  return (
    <div style={body(theme)}>
      <div style={content(theme)}>
        <div style={innerContent(theme)}>
          <span style={heading(theme)}>{theme.Strings.title}</span>
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
            <label style={label(theme)}>{theme.Strings.question}</label>
            <input style={input(theme)} />
          </div>
          <div style={buttonBox(theme)}>
            <button style={button(theme)}>{theme.Strings.okButton}</button>
            <button style={button(theme)}>{theme.Strings.exitButton}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
