import React from 'react';
import Row from '@layouts/Row/Row';
import { Colors } from '@styles/colors';
import Column from '@layouts/Column/Column';
import { Spacer } from '@ui/Spacer/Spacer';
import UIText from '@ui/UIText/UIText';
import { styles } from './styles';

type InfoRowProps = {
  icon: React.ReactNode;
  title: string;
  desdescription: string;
};

const InfoRow = ({ icon, title, desdescription }: InfoRowProps) => {
  return (
    <Row
      align="center"
      style={styles.container}
    >
      {icon}
      <Spacer horizontal={12} />
      <Column>
        <UIText variant="characteristicLabel" color={Colors.TextSecondary}>
          {title}
        </UIText>
        <UIText variant="characteristicValue" color={Colors.TextPrimary}>
          {desdescription}
        </UIText>
      </Column>
    </Row>
  );
};

export default InfoRow;
