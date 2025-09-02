import React from "react";
import { Button } from "./Button";

export interface VerticalTimelineItem {
  icon?: React.ReactNode;
  labelStep?: React.ReactNode;
  title?: React.ReactNode;
  concept?: React.ReactNode;
}

interface VerticalTimelineProps {
  step1: VerticalTimelineItem;
  step2: VerticalTimelineItem;
  step3: VerticalTimelineItem;
  onIWantAdvice?: () => void;
  labelIWantAdvice?: string;
}

export const VerticalTimeline = (prop: VerticalTimelineProps) => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Button
        onClick={prop.onIWantAdvice}
        style={{
          left: 92,
          top: 727,
          position: "absolute",
          textAlign: "center",
          color: "white",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        {prop.labelIWantAdvice}
      </Button>
      <div
        style={{
          width: 60,
          height: 60,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#12B759",
          overflow: "hidden",
          borderRadius: 90,
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            left: 18,
            top: 18,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {prop.step1.icon}
        </div>
      </div>
      <div
        style={{
          width: 53,
          left: 86,
          top: 0,
          position: "absolute",
          textAlign: "center",
          color: "#002140",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        {prop.step1.labelStep}
      </div>
      <div
        style={{
          width: 282,
          left: 86,
          top: 29,
          position: "absolute",
          color: "#002140",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        {prop.step1.title}
      </div>
      <div
        style={{
          width: 663,
          left: 86,
          top: 75,
          position: "absolute",
          color: "#002140",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        {prop.step1.concept}
      </div>
      <div
        style={{
          width: 60,
          height: 60,
          left: 0,
          top: 251,
          position: "absolute",
          background: "#12B759",
          overflow: "hidden",
          borderRadius: 90,
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            left: 18,
            top: 18,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {prop.step2.icon}
        </div>
      </div>
      <div
        style={{
          width: 57,
          left: 86,
          top: 251,
          position: "absolute",
          textAlign: "center",
          color: "#002140",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        {prop.step2.labelStep}
      </div>
      <div
        style={{
          width: 282,
          left: 86,
          top: 280,
          position: "absolute",
          color: "#002140",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        {prop.step2.title}
      </div>
      <div
        style={{
          width: 663,
          left: 86,
          top: 326,
          position: "absolute",
          color: "#002140",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        {prop.step2.concept}
      </div>
      <div
        style={{
          width: 60,
          height: 60,
          left: 0,
          top: 502,
          position: "absolute",
          background: "#12B759",
          overflow: "hidden",
          borderRadius: 90,
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            left: 18,
            top: 18,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {prop.step3.icon}
        </div>
      </div>
      <div
        style={{
          width: 57,
          left: 86,
          top: 502,
          position: "absolute",
          textAlign: "center",
          color: "#002140",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        {prop.step3.labelStep}
      </div>
      <div
        style={{
          width: 282,
          left: 86,
          top: 531,
          position: "absolute",
          color: "#002140",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        {prop.step3.title}
      </div>
      <div
        style={{
          width: 663,
          left: 86,
          top: 577,
          position: "absolute",
          color: "#002140",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        {prop.step3.concept}
      </div>
      <div
        style={{
          width: 0,
          height: 187,
          left: 28,
          top: 62,
          position: "absolute",
          borderLeft: "2px dashed #E6E6F1",
        }}
      ></div>
      <div
        style={{
          width: 0,
          height: 187,
          left: 28,
          top: 313,
          position: "absolute",
          borderLeft: "2px dashed #E6E6F1",
        }}
      ></div>
      <div
        style={{
          width: 0,
          height: 187,
          left: 28,
          top: 564,
          position: "absolute",
          borderLeft: "2px dashed #E6E6F1",
        }}
      ></div>
      <div
        style={{
          width: 55,
          height: 0,
          left: 31,
          top: 751,
          position: "absolute",
          borderTop: "2px dashed #E6E6F1",
        }}
      ></div>
    </div>
  );
};
