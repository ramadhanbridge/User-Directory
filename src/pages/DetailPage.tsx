import { useParams } from "react-router";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaGlobe,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import Header from "../components/Header";
import { data } from "../db/data";

type UserDetailProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const UserDetail = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}: UserDetailProps) => {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <article className="mx-auto w-full  overflow-hidden rounded-2xl border border-[#255da6]/15 bg-white shadow-sm">
      <div className="relative h-32 overflow-hidden bg-linear-to-br from-[#1a3f6b] via-[#2b568e] to-[#152d4d] md:h-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.2),transparent_55%)]" />
        <div className="pointer-events-none absolute -right-6 -bottom-8 h-32 w-32 rounded-full bg-red-500/25 blur-2xl" />
      </div>

      <div className="relative px-6 pb-8 md:px-8">
        <div className="-mt-10 mb-4 flex justify-center md:-mt-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-linear-to-br from-[#215497] to-[#1a3f6b] text-2xl font-bold text-white shadow-md md:h-24 md:w-24 md:text-3xl">
            {initials || "?"}
          </div>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-[#1a3f6b]">{name}</h2>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-zinc-500">
            <FaUser className="text-[#3b6dae]/70" />@{username}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <section>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-[#3b6dae] uppercase">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-600">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 transition hover:text-[#3b6dae]"
              >
                <FaEnvelope className="shrink-0 text-[#3b6dae]/70" />
                <span className="truncate">{email}</span>
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 transition hover:text-[#3b6dae]"
              >
                <FaPhone className="shrink-0 text-[#3b6dae]/70" />
                <span className="truncate">{phone}</span>
              </a>
              <a
                href={`https://${website}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-[#3b6dae]"
              >
                <FaGlobe className="shrink-0 text-[#3b6dae]/70" />
                <span className="truncate">{website}</span>
              </a>
            </div>
          </section>

          <div className="h-px bg-linear-to-r from-transparent via-[#3b6dae]/20 to-transparent" />

          <section>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-[#3b6dae] uppercase">
              Address
            </h3>
            <div className="flex gap-3 text-sm text-zinc-600">
              <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#3b6dae]/70" />
              <div className="flex flex-col gap-0.5">
                <span>
                  {address.street}, {address.suite}
                </span>
                <span>
                  {address.city}, {address.zipcode}
                </span>
                <span className="text-xs text-zinc-400">
                  {address.geo.lat}, {address.geo.lng}
                </span>
              </div>
            </div>
          </section>

          <div className="h-px bg-linear-to-r from-transparent via-[#3b6dae]/20 to-transparent" />

          <section>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-[#3b6dae] uppercase">
              Company
            </h3>
            <div className="flex gap-3 text-sm text-zinc-600">
              <FaBuilding className="mt-0.5 shrink-0 text-[#3b6dae]/70" />
              <div className="flex flex-col gap-1">
                <span className="font-medium text-[#1a3f6b]">
                  {company.name}
                </span>
                <span className="italic text-zinc-500">
                  "{company.catchPhrase}"
                </span>
                <span className="text-xs text-zinc-400">{company.bs}</span>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8">
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-zinc-100">
            <div className="h-full w-full rounded-full bg-linear-to-r from-[#3b6dae] to-red-500" />
          </div>
        </div>
      </div>
    </article>
  );
};

const DetailPage = () => {
  const { id } = useParams();
  const user = data.find((u) => String(u.id) === id);

  if (!user) {
    return (
      <div className="flex flex-col gap-6">
        <Header
          title="User not found"
          subtitle="This profile does not exist in the directory."
          to="/users"
          toTitle="Users"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <Header
        title={user.name}
        subtitle="View profile information for this user."
        to="/users"
        toTitle="Users"
      />
      <div className="p-6 md:p-10">
        <UserDetail {...user} />
      </div>
    </div>
  );
};

export default DetailPage;
