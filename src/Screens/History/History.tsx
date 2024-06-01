import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { Button, Text, Snackbar } from "react-native-paper";
import { RootScreens } from "..";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TotalSpending } from "@/Components/Overview/TotalSpending";
import { RecentSpendings } from "@/Components/Overview/RecentSpendings";
import { RecentSavings } from "@/Components/Overview/RecentSavings";
import { SpendingCard } from "@/Components/spendingCard";

export interface IHistoryProps {
  data: User | undefined;
  isLoading: boolean;
}

export const History = (props: IHistoryProps) => {
  const { data, isLoading } = props;
  const [visible, setVisible] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);
  return (
    <View style={styles.viewContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar style="auto" />
        {isLoading ? (
          <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
              {i18n.t(LocalizationKey.LOADING)}
            </Heading>
          </HStack>
        ) : (
          <>
            {/* <Text>{i18n.t(LocalizationKey.HOME)}</Text>
          <Heading color="primary.500" fontSize="md">
            {data?.username}
          </Heading> */}
            <TotalSpending></TotalSpending>
            <Text variant="titleMedium">Lịch sử các khoản chi</Text>
            <SpendingCard
              title="Title"
              amount={10000}
              category="category"
              time={Date.now()}
              mode="standard"
            ></SpendingCard>
            <SpendingCard
              title="Title"
              amount={10000}
              category="category"
              time={Date.now()}
              mode="standard"
            ></SpendingCard>
            <SpendingCard
              title="Title"
              amount={10000}
              category="category"
              time={Date.now()}
              mode="standard"
            ></SpendingCard>
            <SpendingCard
              title="Title"
              amount={10000}
              category="category"
              time={Date.now()}
              mode="standard"
            ></SpendingCard>
            <SpendingCard
              title="Title"
              amount={10000}
              category="category"
              time={Date.now()}
              mode="standard"
            ></SpendingCard>
            <SpendingCard
              title="Title"
              amount={10000}
              category="category"
              time={Date.now()}
              mode="standard"
            ></SpendingCard>
            <SpendingCard
              title="Title"
              amount={10000}
              category="category"
              time={Date.now()}
              mode="standard"
            ></SpendingCard>
            <SpendingCard
              title="Title"
              amount={10000}
              category="category"
              time={Date.now()}
              mode="standard"
            ></SpendingCard>
            <SpendingCard
              title="Title"
              amount={10000}
              category="category"
              time={Date.now()}
              mode="standard"
            ></SpendingCard>
            <Text>This is the history screen</Text>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minWidth: "100%",
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
    paddingBottom: 80,
    minWidth: "100%",
  },
});
