import { getHackathons, getProjects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';

export const metadata = {
    title: 'Projects',
    description: 'Explore a selection of my featured projects and hackathon highlights, showcasing my skills in AI, web development, and more.'
};

export default function ProjectsPage() {
    const projects = getProjects();
    const hackathons = getHackathons();

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12 fade-in">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                    My Work
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A collection of projects where I've turned ideas into reality.
                </p>
            </div>

            <section className="mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-bold font-headline mb-8">Featured Projects</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={project.id} className="fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="fade-in" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-3xl font-bold font-headline mb-8">Hackathon Highlights</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {hackathons.map((hackathon, index) => (
                        <div key={hackathon.id} className="fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                            <ProjectCard project={hackathon} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
