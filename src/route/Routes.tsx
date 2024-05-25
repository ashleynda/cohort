import Layout from "../components/Layout";
import WorkspaceLayout from "../components/WorkspaceLayout";
import Home from "../pages/home/Home";
import Programs from "../pages/programs/Programs";
import Resources from "../pages/resource/Resources";


export const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "home",
                element: <Home />,
                    
            },
            {
                path: "resources",
                element: <Resources />,
                    
            },
            {
                path: "/workspace",
                element: <WorkspaceLayout/>,
                children: [
                    {
                        path: "/workspace/programs",
                        element: <Programs/>
                    },
                ]
                
            }
           
        ]
    },
    
    
]