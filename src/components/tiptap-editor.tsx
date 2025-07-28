"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "next/image"

interface TiptapEditorProps {
  content: string
  editable?: boolean
}

export function TiptapEditor({ content, editable = false }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editable,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
    immediatelyRender: false,
  })

  return (
    <div className="tiptap-editor">
      <EditorContent editor={editor} />
      <style jsx global>{`
        .tiptap-editor .ProseMirror {
          outline: none;
          padding: 1rem;
        }
        
        .tiptap-editor .ProseMirror h1 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #1f2937;
        }
        
        .tiptap-editor .ProseMirror h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #374151;
        }
        
        .tiptap-editor .ProseMirror h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #4b5563;
        }
        
        .tiptap-editor .ProseMirror p {
          margin-bottom: 1rem;
          line-height: 1.7;
          color: #374151;
        }
        
        .tiptap-editor .ProseMirror ul {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        
        .tiptap-editor .ProseMirror li {
          margin-bottom: 0.5rem;
          color: #374151;
        }
        
        .tiptap-editor .ProseMirror strong {
          font-weight: 600;
          color: #1f2937;
        }
        
        .tiptap-editor .ProseMirror em {
          font-style: italic;
        }
        
        .tiptap-editor .ProseMirror blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #6b7280;
        }
        
        .tiptap-editor .ProseMirror code {
          background-color: #f3f4f6;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.875rem;
          color: #dc2626;
        }
        
        .tiptap-editor .ProseMirror pre {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        
        .tiptap-editor .ProseMirror pre code {
          background: none;
          color: inherit;
          padding: 0;
        }

        .media-container {
          margin: 2rem 0;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .video-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          margin: 2rem 0;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .image-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }

        .gallery-item {
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: transform 0.2s ease-in-out;
        }

        .gallery-item:hover {
          transform: scale(1.02);
        }

        .media-caption {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          color: white;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

// Custom components for media content
export function VideoEmbed({ src, title, caption }: { src: string; title: string; caption?: string }) {
  return (
    <div className="video-container">
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {caption && <div className="media-caption">{caption}</div>}
    </div>
  )
}

export function ImageGallery({ images }: { images: Array<{ src: string; alt: string; caption?: string }> }) {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          {image.caption && <div className="media-caption">{image.caption}</div>}
        </div>
      ))}
    </div>
  )
}
