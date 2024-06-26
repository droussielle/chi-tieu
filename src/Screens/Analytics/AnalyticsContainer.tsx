import { Analytics } from "./Analytics";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";
import { RootScreens } from "..";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootProps } from "..";

type MainScreenNavigatorProps = NativeStackScreenProps<
  RootProps,
  RootScreens.MAIN
>;

export const AnalyticsContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Analytics data={data} isLoading={isLoading} />;
};
