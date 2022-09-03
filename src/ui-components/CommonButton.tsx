import React, { PropsWithChildren } from 'react';
import { MDBBtn, MDBSpinner } from 'mdb-react-ui-kit';

export const CustomButton: React.FC<{
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info' | 'none' | 'link';
    loading: boolean;
    type: "submit" | "reset" | "button" | undefined;
} & PropsWithChildren> = (props) => {
  const { color = 'primary', loading } = props;
  return (
    <MDBBtn type={props.type} color={color} disabled={loading}>
      {loading ? (
        <MDBSpinner color={'light'} size="sm">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      ) : (
        props.children
      )}
    </MDBBtn>
  );
};
