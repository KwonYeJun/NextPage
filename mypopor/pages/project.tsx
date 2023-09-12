import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import NotionProject from '../components/NotionProject';
import {TOKEN, DATABASE} from '../config/notionKey'
interface Project {
  id: string;
  properties: {
    projectName: {
      title: [
        {
          plain_text: string;
        }
      ];
    };
    Description: {
      rich_text: [
        {
          plain_text: string;
        }
      ];
    };
    Tags: {
      multi_select: [];
    };
    WorkPeriod: {
      date: {
        start: string;
        end: string;
      };
    };
    googleDriveVideo: {
      relation: {
        id: string;
      };
    };
  };
  cover?: {
    file?: {
      url: string;
    };
    external?: {
      url: string;
    };
  };
}

interface ProjectsProps {
  projects: {
    results: Project[];
  };
}

export default function Projects({ projects }: ProjectsProps) {
  console.log(projects);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>KwonYeJunPage</title>
          <meta name="description" content="포토폴리오" />
          <link rel="icon" href="/assets/icons/icon-152x152.png" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
          {projects.results.map((aProject) => (
            <NotionProject key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ProjectsProps> = async () => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'projectName',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE}/query`, options);

  const projects = await res.json();

  const projectNames = projects.results.map((aProject) => aProject.properties.projectName.title[0].plain_text);
  console.log(projectNames, 'projects')
  console.log(TOKEN,'process.env.NOTION_TOKE')
  console.log(DATABASE,'process.env.NOTION_DATABASE')

  console.log(`projectNames : ${projectNames}`);

  return {
    props:
      { projects }, // will be passed to the page component as props
  };
};
