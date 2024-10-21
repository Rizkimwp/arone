import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Form = () => {
  // State untuk setiap field
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState(""); // State untuk artikel dari TinyMCE

  // Handler untuk file upload (gambar)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  // Form submission handler (optional)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data form, misalnya kirim ke backend.
    console.log({
      title,
      category,
      slug,
      image,
      content, // Konten artikel dari TinyMCE
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-9 sm:grid-cols-1"
    >
      <div className="flex flex-col gap-3">
        {/* Input Judul */}

        <div className="border-b border-stroke py-1 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black ">Judul</h3>
        </div>
        <div className="p-6.5">
          <input
            type="text"
            placeholder="Masukkan judul artikel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input "
          />
        </div>

        {/* Input Kategori */}

        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black ">Kategori</h3>
        </div>
        <div className="p-6.5">
          <input
            type="text"
            placeholder="Masukkan kategori artikel"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input "
          />
        </div>

        {/* Input Slug */}

        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black ">Slug</h3>
        </div>
        <div className="p-6.5">
          <input
            type="text"
            placeholder="Masukkan slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input "
          />
        </div>

        {/* File Upload (Gambar) */}

        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black ">Upload Gambar</h3>
        </div>
        <div className="p-6.5">
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-80 focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark file:bg-blue-500 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {/* TinyMCE Editor */}

        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black ">Konten Artikel</h3>
        </div>
        <div className="p-6.5 bg-white dark:bg-form-input">
          <Editor
            apiKey="u8v85xbmfdwha5vy38tu6d5jhx7qy2k1d45rkjgvd53y5sb2" // Ganti dengan API key dari TinyMCE (atau hapus untuk mode open-source)
            initialValue="<p>Mulai menulis artikel...</p>"
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help",
            }}
            value={content}
            onEditorChange={(newContent) => setContent(newContent)}
          />
        </div>

        {/* Submit Button */}
      </div>
    </form>
  );
};

export default Form;
