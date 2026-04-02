import { PropsWithChildren } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export type PreviewLayoutProps<T = string> = PropsWithChildren<{
  label: string;
  values: T[];
  selectedValue: T;
  setSelectedValue: (value: T) => void;
}>;

const PreviewLayout = <T = string,>({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps<T>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={String(value)}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, value === selectedValue && styles.selected]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}
            >
              {String(value)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.childContainer, { [label]: selectedValue }]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  childContainer: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 8,
    backgroundColor: "aliceblue",
    maxHeight: 400,
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
});

export default PreviewLayout;
