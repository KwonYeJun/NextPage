import Image from "next/image";

type Tag = {
    id: string;
    name: string;
};

type ProjectData = {
    properties: {
        projectName: { title: { plain_text: string }[] };
        Description: { rich_text: { plain_text: string }[] };
        Tags: { multi_select: Tag[] };
        WorkPeriod: { date: { start: string; end: string } };
        googleDriveVideo: { relation: { id : string} };
    
    },
    cover?: {
        file?: { url: string };
        external?: { url: string };
    };
}

interface ProjectItemProps {
    data: ProjectData;
}

export default function ProjectItem({ data }: ProjectItemProps) {

    const title = data.properties.projectName.title[0].plain_text
    // const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover?.file?.url || data.cover?.external?.url;
    const tags = data.properties.Tags.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end = data.properties.WorkPeriod.date.end


    const calculatedPeriod = (start, end) => {

        var startDate: any = start
        var endDate: any = end

        console.log(`startDate : ${startDate}`)
        console.log(`endDate : ${endDate}`)

        const diffInMs: number = Math.abs(endDate - startDate);
        const result: number = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`기간 : ${result}`)

        return result;

    };

    return (
        <div className="project-card">
            <img
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="100"
                height="50"
                style={{}}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                {/* <a href="">{googleDriveVideo}</a> */}
                <p className="my-1 ">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                </p>
                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>

            </div>

        </div>
    );
}