import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell, getKeyValue
} from "@nextui-org/react";
import EyeIcon from "@/components/icons/EyeIcon"
import EditIcon from "@/components/icons/EditIcon";
import ModalDelete from "@/components/ModalDelete";
import ModalFormPublisher from "@/components/ModalFormPublisher";
import {useRouter} from "next/navigation";

interface Props {
  isLoadingForm: boolean
  tableHeaders: string[]
  tableItems: { [key: string]: any}[]
  deleteItem: (id: string) => void
  updateItem: (id: string, name: string) => void
}

export default function CustomTable (
  { isLoadingForm, tableHeaders, tableItems, deleteItem, updateItem }: Props
) {
  const router = useRouter()
  const onDeleteItem = (id: string) => { deleteItem(id) }
  const onUpdateItem = (id: string, name: string) => { updateItem(id, name) }

  return (
    <>
      <Table aria-label='Custom table'>
        <TableHeader>
          { tableHeaders.map((header: string) => (
            <TableColumn key={header.toLowerCase().replace(' ', '_')}>
              { header }
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          { tableItems.map((item: { [key: string]: any }, index: number) => (
            <TableRow key={item.id}>
              {(columnKey) =><TableCell>{
                columnKey === 'no' ? index + 1 :
                columnKey === 'action' ?
                  <div className='flex items-center'>
                    <span
                      className='mx-2 cursor-pointer active:opacity-50'
                      onClick={() => router.push(`/publisher/${item.id}`)}
                    >
                      <EyeIcon />
                    </span>
                    <ModalFormPublisher
                      formType={'UPDATE'}
                      isLoading={isLoadingForm}
                      addPublisher={() => {}}
                      updatePublisher={(event) => onUpdateItem(item.id, event)}
                    />
                    <ModalDelete name={'test'} isLoading={isLoadingForm} deleteItem={() => onDeleteItem(item.id)} />
                  </div> :
                getKeyValue(item, columnKey)}
              </TableCell>}
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </>
  )
}