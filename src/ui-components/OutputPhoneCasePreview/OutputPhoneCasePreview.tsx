import { ContainedBoxMetric } from '@qcases/common';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useResizeDetector } from 'react-resize-detector';
import { OutputPhoneCasePreviewProps } from './OutputPhoneCasePreview.types';

const OutputPhoneCasePreviewInner: React.FC<OutputPhoneCasePreviewProps> = ({
  elementId,
  phoneCase,
  ratio,
  exactBoundaryRef,
  exactBoundaryHiddenOverflow,
  onChangeRenderRatio,
  children,
}) => {
  const { exactBoundary, camera, imageUrl } = phoneCase;
  const imageRef = useRef<HTMLImageElement>(null);
  const [calculatedExactBoundary, setCalculatedExactBoundary] = useState<
    Partial<ContainedBoxMetric>
  >({ ...exactBoundary });
  const [calculatedCamera, setCalculatedCamera] = useState<
    Partial<ContainedBoxMetric>
  >({ ...camera });

  const { width, height, ref } = useResizeDetector();
  useEffect(() => {
    if (!imageRef?.current) {
      return;
    }
    onChangeRenderRatio(imageRef.current.width / imageRef.current.naturalWidth);
  }, [width, height, onChangeRenderRatio]);
  useEffect(() => {
    if (!exactBoundary) {
      return;
    }
    const result: Partial<ContainedBoxMetric> = {};
    Object.keys(exactBoundary).forEach(key => {
      result[key] = !exactBoundary[key] ? 0 : exactBoundary[key] * ratio;
    });
    setCalculatedExactBoundary(result);
  }, [ratio, exactBoundary]);

  useEffect(() => {
    if (!camera) {
      return;
    }
    const result: Partial<ContainedBoxMetric> = {};
    Object.keys(camera).forEach(key => {
      result[key] = !camera[key] ? 0 : camera[key] * ratio;
    });
    setCalculatedCamera(result);
  }, [ratio, camera]);

  const onFinishLoadingImage = (event: any) => {
    onChangeRenderRatio(event.target.width / event.target.naturalWidth);
  };

  return (
    <Container
      className="outputPhoneCasePreview"
      id={elementId ? elementId : _.uniqueId()}
      ref={ref}
    >
      <Row>
        <Col>
          <div className="outputPhoneCasePreview__mainContent">
            <img
              ref={imageRef}
              className="outputPhoneCasePreview__backgroundImage"
              src={imageUrl}
              onLoad={onFinishLoadingImage}
            />
            <div
              className={`outputPhoneCasePreview__exactBoundary ${
                exactBoundaryHiddenOverflow
                  ? 'outputPhoneCasePreview__exactBoundary--hidden-overflow'
                  : ''
              }`}
              ref={exactBoundaryRef}
              style={{
                width: `${calculatedExactBoundary.width}px`,
                height: `${calculatedExactBoundary.height}px`,
                left: `${calculatedExactBoundary.x}px`,
                top: `${calculatedExactBoundary.y}px`,
                borderTopLeftRadius: `${calculatedExactBoundary.borderTopLeftRadius}px`,
                borderTopRightRadius: `${calculatedExactBoundary.borderTopRightRadius}px`,
                borderBottomLeftRadius: `${calculatedExactBoundary.borderBottomLeftRadius}px`,
                borderBottomRightRadius: `${calculatedExactBoundary.borderBottomRightRadius}px`,
              }}
            >
              <>
                <div
                  className="outputPhoneCasePreview__cameraArea"
                  style={{
                    width: `${calculatedCamera.width}px`,
                    height: `${calculatedCamera.height}px`,
                    top: `${calculatedCamera.y}px`,
                    left: `${calculatedCamera.x}px`,
                    borderBottomLeftRadius: `${calculatedCamera.borderBottomLeftRadius}px`,
                    borderBottomRightRadius: `${calculatedCamera.borderBottomRightRadius}px`,
                    borderTopLeftRadius: `${calculatedCamera.borderTopLeftRadius}px`,
                    borderTopRightRadius: `${calculatedCamera.borderTopRightRadius}px`,
                    outlineWidth: `${ratio}px`,
                  }}
                ></div>
                {children}
              </>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export const OutputPhoneCasePreview = React.memo(OutputPhoneCasePreviewInner);
