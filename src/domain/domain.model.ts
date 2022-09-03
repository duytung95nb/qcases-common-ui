// Need to sync with backend model regularly
export interface BoxMetric {
    width: number;
    height: number;
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
    borderBottomRightRadius: number;
    borderBottomLeftRadius: number;
  }
  
  export interface ContainedBoxMetric extends BoxMetric {
    x: number;
    y: number;
  }
  
  export type ContainedBoxMetricKeys = keyof ContainedBoxMetric;
  
  export type BorderLine = {
    color?: string;
    width: number;
  };
  export interface GridItemBoxMextric extends ContainedBoxMetric {
    borderLine?: BorderLine;
  }
  
  export interface GridItem {
    id: string;
    metric: GridItemBoxMextric;
  }
  
  export interface Grid {
    id: string;
    gridItems: GridItem[];
  }
  
  export interface PhoneCase {
    id: string;
    name: string;
    imageUrl: string;
    exactBoundary: ContainedBoxMetric;
    camera: ContainedBoxMetric;
  }
  
  export interface Designer {
    id: string;
    name: string;
    alias: string;
    phoneCase: PhoneCase;
    grids: Grid[];
  }
  