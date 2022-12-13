import { FCCType } from '@type/fc-with-children.type';
import { TypographyWeightType } from './typography.weight';
import { ComponentType } from './typography.variants';
import { TypographyPositionType } from './typography.positions';

export interface TypographyProps {
  type?: ComponentType;
  fontWeight?: TypographyWeightType;
  align?: TypographyPositionType;
  // color?: COLORS; // TODO add enum COLOR
}

export const Typography: FCCType<TypographyProps> = ({
  children,
  // type = COMPONENT_TYPE.P,
  // fontWeight = typographyWeight.regular,
  // align = typographyPositions.left,
  // truncate
}) => {
  return <p>{children}</p>;
};
