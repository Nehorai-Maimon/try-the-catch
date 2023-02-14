export default function UploadFiles() {

    function send(e) {

        const fd = new FormData()
        fd.append("nehorai", e.target[0].files[0])
        fd.append("maimon", e.target[1].value)

        fetch('http://localhost:4000/files/many', {
            method: 'POST',
            body: fd
        })
            .then((response) => response.json())
            .then((result) => { console.log('Success:', JSON.parse(result)); })
            .catch((error) => { console.error('Error:', error); });
    }
    return (<div className="App">
            <form
                encType="multipart/form-data"
                onSubmit={(e) => {
                    e.preventDefault()
                    send(e)
                }}
            >
                <input type="file" name='nehorai' /><br />
                <input type="text" name='text' /><br />
                <button >submit</button>
            </form>
        </div>
    );
}