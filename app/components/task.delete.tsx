import { Button } from "./button";
import {
  BaseModal,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./modal";

export default function DeleteTaskModal() {
  return (
    <BaseModal id="task/delete">
      <form className="flex flex-col gap-6">
        <ModalHeader>
          <ModalTitle variant="destructive">Delete this task?</ModalTitle>
        </ModalHeader>

        <ModalDescription>
          Are you sure you want to delete the &#39;Build settings UI&#39; task
          and its subtasks? This action cannot be reversed.
        </ModalDescription>

        <ModalFooter>
          <Button type="submit" intent="destructive" fullWidth>
            Delete
          </Button>

          <Button type="button" intent="secondary" fullWidth>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </BaseModal>
  );
}
