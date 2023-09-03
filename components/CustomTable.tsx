'use client'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@nextui-org/react";
import EyeIcon from "@/components/icons/EyeIcon"
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";
import {useRouter} from "next/navigation";
import {Publisher} from "@/types/publisher";

interface Props {
  publishers: Publisher[]
}

export default function CustomTable (props: Props) {
  const router = useRouter()

  return (
    <>
      <Table aria-label='Custom table'>
        <TableHeader>
          <TableColumn key='no'>No</TableColumn>
          <TableColumn key='name'>Name</TableColumn>
          <TableColumn key='total_game'>Total Game</TableColumn>
          <TableColumn key='action'>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          { props.publishers.map((item: Publisher, index: number) => (
            <TableRow key={item.id}>
              <TableCell key=''>{ index + 1 }</TableCell>
              <TableCell key=''>{ item.name }</TableCell>
              <TableCell key=''>{ item.games.length }</TableCell>
              <TableCell>
                <div className='flex items-center'>
                <span
                  className='cursor-pointer active:opacity-50'
                  onClick={() => router.push(`/publisher/${item.id}`)}
                >
                  <EyeIcon />
                </span>
                  <span className='mx-2 cursor-pointer active:opacity-50'>
                  <EditIcon />
                </span>
                  <span className='cursor-pointer active:opacity-50'>
                  <DeleteIcon />
                </span>
                </div>
              </TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </>
  )
}