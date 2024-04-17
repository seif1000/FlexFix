import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '@components/Header';
import {useGetTopPopularQuery, useLazyGetTopPopularQuery} from '@redux/api';

export default function Movie() {
  const {data} = useGetTopPopularQuery(1);
  const [trigger, {data: pageData, isFetching}] = useLazyGetTopPopularQuery();
  console.log('data', data);
  return (
    <SafeAreaView>
      <Header text="Movies" hasBack={false} />
    </SafeAreaView>
  );
}
