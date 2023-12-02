import { Button } from "../shared";
import {
  BaseModal,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./modal";

type Props = {};

export default function DeleteBoardModal() {
  return (
    <BaseModal id="board/delete">
      <form className="flex flex-col gap-6">
        <ModalHeader>
          <ModalTitle variant="destructive">Delete this board?</ModalTitle>
        </ModalHeader>

        <ModalDescription>
          Are you sure you want to delete the &apos;Platform Launch&apos; board?
          This action will remove all columns and tasks and cannot be reversed.
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
