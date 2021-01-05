import { Modal, Text, TextLoop } from "../components";

export default function ExtraContainer({ ...props }) {
  return (
    <Modal fullscreen={true} {...props}>
      <div className="d-flex align-items-center justify-content-center flex-column h-100">
        <div className="d-flex align-center mb-4">
          <Text as="h1" weight="bold" text="Mən" className="mx-2" />
          <TextLoop
            texts={["Developerəm", "Qrafik Dizaynerəm"]}
            as="h1"
            weight="bolder"
            style={{ width: "300px" }}
          />
        </div>
      </div>
    </Modal>
  );
}