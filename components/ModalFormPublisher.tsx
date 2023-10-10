import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure, Input
} from "@nextui-org/react";
import {ReactElement, useState} from "react";
import {ChangeEvent} from "react";
import EditIcon from "@/components/icons/EditIcon";

interface Props {
  isLoading: boolean
  addPublisher: (data: string) => void
  updatePublisher: (data: string) => void
  formType: string
}

export default function ModalFormPublisher (
  { isLoading, addPublisher, updatePublisher, formType }: Props
) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const [name, setName] = useState<string>('')
  let activator: ReactElement | null = null

  const onInputName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onClickAdd = () => { addPublisher(name) }
  const onClickUpdate = () => { updatePublisher(name) }

  switch (formType) {
    case 'CREATE' :
      activator =
        <Button size='lg' className='rounded-small' onPress={onOpen}>
          Add Publisher
        </Button>

      break
    case 'UPDATE' :
      activator =
        <span className='mx-2 cursor-pointer active:opacity-50' onClick={() => onOpen()}>
          <EditIcon />
        </span>; break
  }

  return (
    <>
      { activator }
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
                  onClick={() => formType === 'CREATE' ? onClickAdd() : onClickUpdate()}
                >
                  { formType === 'CREATE' ? 'Add' : 'Update'}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}