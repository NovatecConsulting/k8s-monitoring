import React from 'react';
import { Element } from 'types';

// import { render } from 'react-dom';
import { Layer } from 'react-konva';
import { RectItem } from 'ObjectVisualisation/Item/RectItem';
import { TextItem } from 'ObjectVisualisation/Item/TextItem';
import { SelectableValue } from '@grafana/data';
import { MetricImage } from 'ObjectVisualisation/Item/MetricImage';
import { AppMetricInfo } from 'ObjectVisualisation/Item/AppMetricInfo';
import { InfMetricInfo } from 'ObjectVisualisation/Item/InfMetricInfo';
type Props = {
  allInfos: Element[];
  setGroupedOptionHandler: (value: SelectableValue) => void;
  itemSelectHandler: (item: Element) => void;
};

export const Item = ({ allInfos, setGroupedOptionHandler, itemSelectHandler }: Props) => {
  return (
    <Layer>
      {allInfos.map(info => (
        <RectItem
          position={info.position}
          width={info.width}
          height={info.height}
          color={info.color}
          option={info.text}
          setGroupedOption={setGroupedOptionHandler}
          type={info.elementInfo?.type}
        />
      ))}
      {allInfos.map(info => (
        <TextItem
          position={info.position}
          text={info.text}
          option={info.text}
          setGroupedOption={setGroupedOptionHandler}
          type={info.elementInfo?.type}
        />
      ))}
      {allInfos.map(info => (
        <MetricImage
          position={info.position}
          itemWidth={info.width}
          item={info}
          itemSelectHandler={itemSelectHandler}
        />
      ))}
      {allInfos.map(info => (
        <AppMetricInfo
          position={info.position}
          itemWidth={info.width}
          item={info}
        />
      ))}
       {allInfos.map(info => (
        <InfMetricInfo
          position={info.position}
          itemWidth={info.width}
          item={info}
        />
      ))}
    </Layer>
  );
};
