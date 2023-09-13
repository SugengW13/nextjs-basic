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
import {useRouter} from "next/navigation";

interface Props {
  tableHeaders: string[]
  tableItems: { [key: string]: any}[]
  deleteItem: (id: string) => void
}

export default function CustomTable ({ tableHeaders, tableItems, deleteItem }: Props) {
  const router = useRouter()
  const onDeleteItem = (id: string) => { deleteItem(id) }

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
                    <span className='mx-2 cursor-pointer active:opacity-50'>
                      <EditIcon />
                    </span>
                    <ModalDelete name={'test'} isLoading={false} deleteItem={() => onDeleteItem(item.id)} />
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