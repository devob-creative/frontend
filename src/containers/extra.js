import { Modal, Text, TextLoop } from "../components";
import { useModals } from "../apollo/actions/modal.action";

export default function ExtraContainer({ ...props }) {
  const { data: { modals } = {} } = useModals();
  return (
    <Modal isOpen={modals?.extra} fullscreen={true} {...props}>
      <div className="d-flex align-items-center justify-content-center flex-column h-100">
        <div className="d-flex align-center mb-4">
          {/* <Text as="h1" weight="bold" text="I'm a" className="mx-2" />
          <TextLoop
            texts={["Developer", "Graphic Designer"]}
            as="h1"
            weight="bolder"
          /> */}
          <Text as="h1" text="Look again later" weight="bold" />
        </div>
      </div>
    </Modal>
  );
}
