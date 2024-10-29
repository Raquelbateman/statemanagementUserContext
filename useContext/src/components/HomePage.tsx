import Todo from "./Todo"


const HomePage = () => {
  return (
    <>
        <h1 className="text-center" mb-3>Welcome!</h1>
        <h2 className="text-center">Global State Management: UseContext Example</h2>
        <div className="container-fluid">
            <div className="row">
                <Todo/>

            </div>


        </div>

    </>
  )
}

export default HomePage