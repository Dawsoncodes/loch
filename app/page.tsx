import {
  FeaturesMarquee,
  Group,
  Header,
  MiddleSection,
  SignupForm,
  Testimonials,
} from "@/components"

export default function Home() {
  return (
    <main className="flex overflow-hidden">
      {/* Left */}
      <div className="hidden xl:block w-7/12 py-10 bg-gradient-to-bl from-dark-500 via-primary-500 to-secondary-500 overflow-hidden">
        <Header />
        <div className="px-14">
          <MiddleSection className="my-20" />
          <Testimonials />
        </div>
      </div>

      {/* Right */}
      <Group vertical className="w-full xl:w-5/12 p-10 mt-48">
        <SignupForm />
        <FeaturesMarquee className="xl:hidden mt-10" />
      </Group>
    </main>
  )
}
