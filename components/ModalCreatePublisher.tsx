import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure, Input
} from "@nextui-org/react";
import {useState} from "react";
import {ChangeEvent} from "react";

interface Props {
  isLoading: boolean
  addPublisher: (data: string) => void
}

export default function ModalCreatePublisher (
  { isLoading, addPublisher }: Props
) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const [name, setName] = useState<string>('')

  const onInputName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onClickAdd = () => { addPublisher(name) }

  return (
    <>
      <Button size='lg' className='rounded-small' onPress={onOpen}>
        Add Publisher
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Publisher</ModalHeader>
              <ModalBody>
                <Input
                  label='Name'
                  type='text'
                  isRequired
                  onInput={onInputName}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  isLoading={isLoading}
                  onClick={() => onClickAdd()}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}