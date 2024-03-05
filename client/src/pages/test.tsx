import { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]); // Directly use the File object
    }
  };

  const handleSubmit = async () => {
    try {
      if (!file) {
        console.error("No file selected.");
        return;
      }

      setLoading(true);

      // Create a FormData object and append the file to it
      const formData = new FormData();
      formData.append("file", file);

      console.log("file from fileupload rest api", file)


      // Send a POST request to your REST API endpoint
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage("File uploaded successfully!");
      } else {
        setErrorMessage("Error uploading file. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setErrorMessage("Error uploading file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} disabled={loading || !file}>
        Upload
      </button>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default FileUpload;
