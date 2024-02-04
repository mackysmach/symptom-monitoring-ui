export const extract_drug_label = async (imageFile) => {
    const fileFormData = new FormData();
                    fileFormData.append('file', imageFile);

                    const fileResponse = await fetch(`Http://localhost:8000/drug_label/extract/`, {
                        method: 'POST',
                        credentials: "include",
                        body: fileFormData,
                    });
                    const result = await fileResponse.json()
                    // console.log(result);
                    return(result);

}