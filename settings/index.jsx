function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Seperator Bar Color</Text>}>
        <Toggle
          settingsKey="seperatorToggle"
          label="Seperator based on Day Prgress On/Off"
        />
        <ColorSelect
          settingsKey="color"
          colors={[
            {color: "firebrick"},
            {color: "darkorange"}, 
            {color: "gold"},
            {color: "deepskyblue"},
            {color: "olivedrab"},
            {color: "deeppink"},
            {color: "purple"}
          ]}
        />
      </Section>
      <Select
        label={`Type of Day`}
        settingsKey="schedule"
        options={[
          {name:"Regular"},
          {name:"No School"},
          {name:"2 Hour Delay"},
          {name:"Student Council 1"},
        ]}
        />
    </Page>
  );
}

registerSettingsPage(mySettings);
