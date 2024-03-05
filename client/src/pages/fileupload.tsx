import { useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

// Ensure you have the correct import for gql
const UPLOAD_FILE = gql`
 mutation SingleUpload($file: Upload!) {
    singleUpload(file: $file)
 }
`;

function FileUpload() {
 const [file, setFile] = useState<File | null>(null);
 const [uploadFile, { loading, error, data }] = useMutation(UPLOAD_FILE);

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
 };

 const handleSubmit = async () => {
    try {
      if (!file) {
        console.error("No file selected.");
        return;
      }

      // Ensure the file is correctly passed as a variable
      await uploadFile({ variables: { file: file } });

      if (!error) {
        setFile(null);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
 };

 return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} disabled={loading || !file}>
        Upload
      </button>
      {data && <p>{data.singleUpload}</p>}
      {error && <p>Error uploading file: {error.message}</p>}
    </div>
 );
}

export default FileUpload;
