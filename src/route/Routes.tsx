import Layout from "../components/Layout";
import WorkspaceLayout from "../components/WorkspaceLayout";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../pages/home/Home";
import InstructorCohort from "../pages/instructorCohort/InstructorCohort";
import InstructorContainer from "../pages/instructorCohort/InstructorContainer";
import Programs from "../pages/programs/Programs";
// import InstructorContainer from "../pages/instructorCohort/InstructorContainer";
import Resources from "../pages/resource/Resources";
import Cohorts from "../pages/workspace/Cohorts";
import Hero from "../pages/workspace/Hero";
// import Workspace from "../pages/workspace/Workspace";

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