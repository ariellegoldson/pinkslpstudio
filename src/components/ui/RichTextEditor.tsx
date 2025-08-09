'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Focus from '@tiptap/extension-focus'
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered,
  Quote,
  Undo,
  Redo
} from 'lucide-react'
import { forwardRef, useImperativeHandle } from 'react'

interface RichTextEditorProps {
  content?: string
  placeholder?: string
  onChange?: (content: string) => void
  className?: string
  readOnly?: boolean
}

export interface RichTextEditorRef {
  getHTML: () => string
  getText: () => string
  setContent: (content: string) => void
  focus: () => void
}

const RichTextEditor = forwardRef<RichTextEditorRef, RichTextEditorProps>(
  ({ content = '', placeholder = 'Start typing...', onChange, className = '', readOnly = false }, ref) => {
    const editor = useEditor({
      extensions: [
        StarterKit,
        Placeholder.configure({
          placeholder,
        }),
        Focus.configure({
          className: 'has-focus',
          mode: 'all',
        }),
      ],
      content,
      editable: !readOnly,
      onUpdate: ({ editor }) => {
        onChange?.(editor.getHTML())
      },
    })

    useImperativeHandle(ref, () => ({
      getHTML: () => editor?.getHTML() || '',
      getText: () => editor?.getText() || '',
      setContent: (content: string) => editor?.commands.setContent(content),
      focus: () => editor?.commands.focus(),
    }))

    if (!editor) {
      return null
    }

    const MenuButton = ({ 
      onClick, 
      isActive = false, 
      children, 
      title 
    }: { 
      onClick: () => void
      isActive?: boolean
      children: React.ReactNode
      title: string
    }) => (
      <button
        type="button"
        onClick={onClick}
        title={title}
        className={`p-2 rounded-lg transition-colors duration-200 ${
          isActive 
            ? 'bg-pink-100 text-pink-700 shadow-sm' 
            : 'text-ink-600 hover:bg-garden-50 hover:text-garden-700'
        }`}
      >
        {children}
      </button>
    )

    return (
      <div className={`border border-garden-200 rounded-2xl bg-white/90 backdrop-blur-sm ${className}`}>
        {!readOnly && (
          <div className="flex items-center gap-1 p-3 border-b border-garden-100">
            <MenuButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              isActive={editor.isActive('bold')}
              title="Bold"
            >
              <Bold className="w-4 h-4" />
            </MenuButton>
            
            <MenuButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              isActive={editor.isActive('italic')}
              title="Italic"
            >
              <Italic className="w-4 h-4" />
            </MenuButton>

            <div className="w-px h-6 bg-garden-200 mx-1" />

            <MenuButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              isActive={editor.isActive('bulletList')}
              title="Bullet List"
            >
              <List className="w-4 h-4" />
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              isActive={editor.isActive('orderedList')}
              title="Numbered List"
            >
              <ListOrdered className="w-4 h-4" />
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              isActive={editor.isActive('blockquote')}
              title="Quote"
            >
              <Quote className="w-4 h-4" />
            </MenuButton>

            <div className="w-px h-6 bg-garden-200 mx-1" />

            <MenuButton
              onClick={() => editor.chain().focus().undo().run()}
              title="Undo"
            >
              <Undo className="w-4 h-4" />
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().redo().run()}
              title="Redo"
            >
              <Redo className="w-4 h-4" />
            </MenuButton>
          </div>
        )}
        
        <EditorContent 
          editor={editor} 
          className={`prose prose-sm max-w-none p-4 min-h-[120px] focus-within:outline-none ${
            readOnly ? 'prose-gray' : ''
          }`}
          style={{
            '& .ProseMirror': {
              outline: 'none',
            },
            '& .ProseMirror p.is-editor-empty:first-child::before': {
              content: 'attr(data-placeholder)',
              float: 'left',
              color: '#9ca3af',
              pointerEvents: 'none',
              height: 0,
            },
            '& .has-focus': {
              borderRadius: '0.5rem',
              outline: '2px solid #4a7c59',
              outlineOffset: '2px',
            },
          } as React.CSSProperties}
        />
      </div>
    )
  }
)

RichTextEditor.displayName = 'RichTextEditor'

export default RichTextEditor