import { PhoneCase } from '@qcases/common';
import { MutableRefObject, PropsWithChildren } from 'react';

export type OutputPhoneCasePreviewProps = {
  elementId?: string;
  phoneCase: Partial<PhoneCase>;
  ratio: number;
  exactBoundaryRef: MutableRefObject<any>;
  onChangeRenderRatio: (newRatio: number) => void;
} & PropsWithChildren;
