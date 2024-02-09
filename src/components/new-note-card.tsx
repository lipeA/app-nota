// lib de icones lucide-react
import { X } from 'lucide-react'

// importação do radix ui (popup)
import * as Dialog from '@radix-ui/react-dialog'

// importação de lib de alertas
import {toast} from 'sonner'

import { ChangeEvent, FormEvent, useState } from 'react'




export default function NewNote() {

     //controladora
    const [showOnboading, setShowOnboading] = useState(true);
   
    // salvar a nota
    const [content, setContent] = useState('');

    // funcioção controladora do textArea.
    function handleStartEditor() {
        setShowOnboading(false)

    }

    // função que é desparada quando user digita no textArea
    function hendleContentChanged(events: ChangeEvent<HTMLTextAreaElement>) {
        // pega o que foi digita pelo user.
        setContent(events.target.value)
       
        // retorna o valor inicial
        if (events.target.value === '') {
            setShowOnboading(true)
        }
    }

    //função para salvar a nota
    function handleSaveNote(event: FormEvent) {
        event.preventDefault()

        toast.success('Nota criada com sucesso!')

    }


    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger className='rounded-md flex flex-col bg-slate-700 text-left p-5 gap-3 outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>

                    <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>

                    <p className='text-sm leading-6 text-slate-400'>
                        Grave uma nota em áudio que será convertida para texto automaticamente.
                    </p>
                </Dialog.Trigger>



                <Dialog.Portal>
                    <Dialog.Overlay className='inset-0 fixed bg-black/60' />

                    {/* conteudo do modal */}
                    <Dialog.Content className='fixed left-1/2 top-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[60vh] w-full bg-slate-700 rounded-md flex flex-col outline-none'>

                        {/* botao para fechar o modal */}
                        <Dialog.Close className='absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
                            <X className='size-5' />
                        </Dialog.Close>

                        <form onSubmit={handleSaveNote} className='flex-1 flex flex-col'>

                            <div className='flex flex-1 flex-col gap-3 p-5'>
                                <span className='text-sm font-medium text-slate-300'> Adicionar nota</span>

                                {showOnboading ? (
                                    <p className='text-sm leading-6 text-slate-400'>
                                        Comece <button className=' font-medium text-lime-400 hover:underline'> gravando uma nota </button>  em áudio ou se preferir <button onClick={handleStartEditor} className=' font-medium text-lime-400 hover:underline'>utilize apenas texto </button> .
                                    </p>
                                ) : (
                                    <textarea className='text-sm leading-6 text-slate-400 bg-transparent resize-none outline-none' onChange={hendleContentChanged} />

                                )}

                            </div>
                            {/* botao de ação dentro do modal */}
                            <button type='submit' className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none hover:bg-lime-500'>
                                Salvar nota
                            </button>
                        </form>
                    </Dialog.Content>
                </Dialog.Portal>


            </Dialog.Root>

        </>
    )
}