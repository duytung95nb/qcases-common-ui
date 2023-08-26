import React, { PropsWithChildren } from 'react';
import { MDBBtn, MDBSpinner } from 'mdb-react-ui-kit';

export const CustomButton: React.FC<{
    loading: boolean;
} & PropsWithChildren & typeof MDBBtn.defaultProps> = (props) => {
  const { loading, children, ...btnProps } = props;
  return (
    <MDBBtn {...btnProps} disabled={loading} >
      {loading ? (
        <MDBSpinner color={'light'} size="sm">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      ) : (
        children
      )}
    </MDBBtn>
  );
};
