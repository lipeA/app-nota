// importação do radix ui (popup)
import * as Dialog from '@radix-ui/react-dialog'

// lib para formatar data.
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';

// lib de icones lucide-react
import { X } from 'lucide-react'

// passando os dados por parametros
interface NoteCardPropd {
    date: Date
    contentText: string
}



export default function NoteCard(props: NoteCardPropd) {
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger className='rounded-md bg-slate-800 p-5  text-left flex flex-col  gap-3 overflow-hidden outline-none relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>

                    <span className='text-sm font-medium text-slate-300'>{props.date.toISOString()}</span>

                    <p className='text-sm leading-6 text-slate-400'>
                        {props.contentText}
                    </p>
                    <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className='inset-0 fixed bg-black/60' />

                    {/* conteudo do modal */}
                    <Dialog.Content className='fixed left-1/2 top-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[60vh] w-full bg-slate-700 rounded-md flex flex-col outline-none'>

                        {/* botao para fechar o modal */}
                        <Dialog.Close className='absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
                            <X className='size-5' />
                        </Dialog.Close>


                        <div className='flex flex-1 flex-col gap-3 p-5'>
                            <span className='text-sm font-medium text-slate-300'>{formatDistanceToNow(props.date, { locale: ptBR, addSuffix: true })}</span>

                            <p className='text-sm leading-6 text-slate-400'>
                                {props.contentText}
                            </p>

                        </div>
                        {/* botao de ação dentro do modal */}
                        <button type='button' className='w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none group'>
                            Deseja <span className='text-red-400 group-hover:underline'>apagar essa nota</span>?
                        </button>

                    </Dialog.Content>
                </Dialog.Portal>



            </Dialog.Root>
        </>
    );
}