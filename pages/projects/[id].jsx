import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import RelatedProjects from '../../components/projects/RelatedProjects';

function ProjectSingle({ project }) {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title={project.title} />

      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {project.ProjectHeader.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {project.ProjectImages.map((img) => (
          <div className="mb-10 sm:mb-0" key={img.id}>
            <Image
              src={img.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={img.title}
              layout="responsive"
              width={100}
              height={90}
            />
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Client details */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {project.ProjectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
              {project.ProjectInfo.CompanyInfo.map((info) => (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <span>{info.title}: </span>
                  <a
                    href={info.details}
                    className={
                      info.title === 'Website' || info.title === 'Phone'
                        ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                        : ''
                    }
                    aria-label="Project Website and Phone"
                  >
                    {info.details}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {project.ProjectInfo.ObjectivesDetails}
            </p>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {project.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {project.ProjectInfo.Technologies[0].techs.join(', ')}
            </p>
          </div>

          {/* social sharing (disabled for now)*/}
        </div>

        {/*  right section */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {project.ProjectInfo.ProjectDetailsHeading}
          </p>
          {project.ProjectInfo.ProjectDetails.map((details) => (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          ))}
        </div>
      </div>

      <RelatedProjects />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: projectsData.map((p) => ({
      params: { id: p.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projectsData.find((p) => p.id.toString() === params.id);
  return { props: { project } };
}

export default ProjectSingle;
