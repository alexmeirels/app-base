import React, { memo, Profiler, useRef, useState } from 'react';
import { FlatList } from 'react-native';

import { Container, ItemContainer, ItemText, ProfilerMetricsText, Title } from './styles';
import { Button } from '../../../../components/Button';

type HomeRenderMetric = {
  id: string;
  phase: 'mount' | 'update' | 'nested-update';
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
};

const HOME_ITEMS = Array.from({ length: 100 }, (_, index) => ({
  id: String(index + 1),
  title: `Item ${index + 1}`,
}));

const ListItem = memo(({ title }: { title: string }) => (
  <ItemContainer>
    <ItemText>{title}</ItemText>
  </ItemContainer>
));

export const HomeScreen = () => {
  const profilerMetricsRef = useRef<HomeRenderMetric[]>([]);
  const [profilerMetricsJson, setProfilerMetricsJson] = useState('[]');

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <ListItem title={item.title} />
  );

  const handleProfilerRender = (
    id: string,
    phase: 'mount' | 'update' | 'nested-update',
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
  ) => {
    profilerMetricsRef.current.push({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
    });
  };

  const handleFlushProfilerMetrics = () => {
    setProfilerMetricsJson(JSON.stringify(profilerMetricsRef.current));
  };

  return (
    <Container testID='home-screen'>
      <Title testID='home-screen-title'>Home</Title>
      <Button
        onPress={handleFlushProfilerMetrics}
        testID='flush-profiler-metrics-button'
        title='Capturar metrics'
      />

      <Profiler id='HomeScreen' onRender={handleProfilerRender}>
        <FlatList data={HOME_ITEMS} keyExtractor={item => item.id} renderItem={renderItem} />
      </Profiler>

      <ProfilerMetricsText testID='profiler-metrics-json'>{profilerMetricsJson}</ProfilerMetricsText>
    </Container>
  );
};
