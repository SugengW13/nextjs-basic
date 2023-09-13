import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from "@nextui-org/react";
import DeleteIcon from "@/components/icons/DeleteIcon";

interface Props {
  name: string
  isLoading: boolean
  deleteItem: () => void
}

export default function ModalDelete (
  { name, isLoading, deleteItem }: Props
) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const onClickDelete = () => { deleteItem() }

  return (
    <>
      <span className='mx-2 cursor-pointer active:opacity-50' onClick={() => onOpen()}>
        <DeleteIcon />
      </span>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete { name }</ModalHeader>
              <ModalBody>
                <p>
                  Are you sure want to delete { name }?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  isLoading={isLoading}
                  onClick={() => onClickDelete()}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}