import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useMemo } from 'react';

type SkillCategory = 'Frontend' | 'Backend' | 'Databases' | 'Others';

interface TechItem {
  name: string;
  category: SkillCategory;
  icon: React.ReactNode;
}

const categories: SkillCategory[] = ['Frontend', 'Backend', 'Databases', 'Others'];

export const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<SkillCategory | null>(null);

  const workStack = useMemo<TechItem[]>(() => [
    {
      name: 'React',
      category: 'Frontend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      name: 'Vite',
      category: 'Frontend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.473 3.419L12.723.048c-.46-.145-.96.085-1.15.53L7.76 10.158l3.655-1.228-2.67 9.878 12.828-14.28c.416-.464.24-1.205-.3-1.309zM.532 3.42c-.54.103-.716.844-.3 1.308l10.963 12.21-1.332-6.529 3.036 1.02L12.43.578c-.19-.445-.69-.675-1.15-.53L.532 3.42z" />
        </svg>
      ),
    },
    {
      name: 'Angular',
      category: 'Frontend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.5L2.25 5.92l1.49 12.35L12 22.5l8.26-4.23 1.49-12.35L12 2.5zm0 2.22l6.83 2.39-1.07 8.89L12 18.42l-5.76-2.42-1.07-8.89L12 4.72zM12 7.2l-3.35 7.6h1.56l.68-1.7h2.22l.68 1.7h1.56L12 7.2zm0 2.24l.75 1.88h-1.5L12 9.44z" />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
    },
    {
      name: 'HTML',
      category: 'Frontend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
    },
    {
      name: 'CSS',
      category: 'Frontend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      name: 'Java',
      category: 'Frontend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M8.851 18.56s-.917.534.667.715c2.417.275 3.963.238 6.852-.275 0 0 .524.346.99.643-4.148 1.5-8.916.643-8.509-.436v-.647zm-1.077-3.084s-1.034.673.499.897c2.955.433 5.434.346 9.176-.39 0 0 .393.385.736.63-4.99 1.637-11.07.784-10.411-.537v-.6zm4.01-4.819c.662.774.223 1.488.223 1.488s1.666-.883 1.054-2.023c-.66-1.229-1.928-1.844-.805-3.329 0 0-3.31 1.077-.472 3.864zm6.65 6.444c-1.053.076-2.148.118-3.266.125 3.018-.838 5.669-2.11 4.757-3.344-.925-1.253-3.693-1.428-5.323-.464.717-.384 1.704-.632 2.508-.632 2.639 0 4.35 1.058 3.52 2.583-.82 1.508-3.922 2.662-7.196 2.662-1.025 0-2.046-.07-3.042-.204.426.31 1.033.518 1.83.606 2.63.292 4.416.242 7.74-.298 0 0 .584.408 1.05.656-3.754 1.34-8.083.743-9.01-.219-.597-.617-.45-1.378.432-1.944-2.482-.692-4.047-1.848-3.21-2.993.93-1.272 3.847-1.446 5.565-.436-.88-.436-2.108-.692-3.085-.692-2.825 0-4.664 1.114-3.75 2.76.88 1.587 4.195 2.784 7.712 2.784.773 0 1.54-.037 2.29-.112-1.636-.57-1.874-1.246-1.874-1.246s.902.164 2.196-.289c1.649-.578 2.05-1.22 1.62-1.867-.625-.937-2.735-1.05-3.882-.262.593-.243 1.36-.375 1.98-.375 1.823 0 3.03.682 2.457 1.758-.57 1.066-2.617 1.854-5.068 1.854-.42 0-.832-.023-1.233-.064 0 0-1.867 1.488 2.012 1.942 3.09.362 5.617.275 9.426-.412 0 0 .524.364.887.604zM10.87 0s-2.08 1.984 1.116 3.633c2.464 1.272 1.633 2.502 1.633 2.502s-.08-.992-1.602-1.782C9.843 3.2 8.784 1.93 10.87 0z" />
        </svg>
      ),
    },
    {
      name: 'Python',
      category: 'Frontend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.92S0 5.767 0 11.957c0 6.19 3.418 5.974 3.418 5.974h2.04v-2.868s-.11-3.418 3.354-3.418h5.772s3.23.056 3.23-3.176V3.176S18.342 0 11.914 0zm-3.21 1.706a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H11.98v-.826h8.101s3.92.467 3.92-5.723c0-6.19-3.418-5.974-3.418-5.974h-2.04v2.868s.11 3.418-3.354 3.418H9.417s-3.23-.056-3.23 3.176v5.292s-.524 3.176 5.9 3.176zm3.21-1.706a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
        </svg>
      ),
    },
    {
      name: 'Spring Boot',
      category: 'Backend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M21.996 11.23a10.016 10.016 0 0 0-.79-3.08 10.086 10.086 0 0 0-2.18-3.32 9.98 9.98 0 0 0-3.32-2.18 10.06 10.06 0 0 0-6.16 0 9.98 9.98 0 0 0-3.32 2.18 10.086 10.086 0 0 0-2.18 3.32 10.05 10.05 0 0 0 0 7.7 10.086 10.086 0 0 0 2.18 3.32 9.98 9.98 0 0 0 3.32 2.18 10.06 10.06 0 0 0 6.16 0 9.98 9.98 0 0 0 3.32-2.18 10.086 10.086 0 0 0 2.18-3.32c.54-1.22.8-2.52.79-3.83zm-1.84.02a8.16 8.16 0 0 1-.65 2.52 8.24 8.24 0 0 1-1.78 2.72 8.16 8.16 0 0 1-2.72 1.78 8.24 8.24 0 0 1-5.04 0 8.16 8.16 0 0 1-2.72-1.78 8.24 8.24 0 0 1-1.78-2.72 8.23 8.23 0 0 1 0-6.3 8.24 8.24 0 0 1 1.78-2.72 8.16 8.16 0 0 1 2.72-1.78 8.24 8.24 0 0 1 5.04 0 8.16 8.16 0 0 1 2.72 1.78 8.24 8.24 0 0 1 1.78 2.72c.44 1 .66 2.07.65 3.14z" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
        </svg>
      ),
    },
    {
      name: 'Express.js',
      category: 'Backend',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
        </svg>
      ),
    },
    {
      name: 'MySQL',
      category: 'Databases',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168z" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      category: 'Databases',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
        </svg>
      ),
    },
    {
      name: 'Git & GitHub',
      category: 'Others',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      name: 'ESLint',
      category: 'Others',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M7.257 9.132L11.816 6.5a.369.369 0 0 1 .368 0l4.559 2.632a.369.369 0 0 1 .184.32v5.263a.37.37 0 0 1-.184.319l-4.559 2.632a.369.369 0 0 1-.368 0l-4.559-2.632a.369.369 0 0 1-.184-.32V9.452a.37.37 0 0 1 .184-.32M23.852 11.53l-5.446-9.475c-.198-.343-.564-.596-.96-.596H6.555c-.396 0-.762.253-.96.596L.149 11.509a1.127 1.127 0 0 0 0 1.117l5.447 9.398c.197.342.563.517.959.517h10.893c.395 0 .76-.17.959-.512l5.446-9.413a1.069 1.069 0 0 0 0-1.086m-4.51 4.556a.4.4 0 0 1-.204.338L12.2 20.426a.395.395 0 0 1-.392 0l-6.943-4.002a.4.4 0 0 1-.205-.338V8.08c0-.14.083-.269.204-.338L11.8 3.74c.12-.07.272-.07.392 0l6.943 4.003a.4.4 0 0 1 .206.338z" />
        </svg>
      ),
    },
    {
      name: 'Vercel',
      category: 'Others',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 22.525H0l12-21.05 12 21.05z" />
        </svg>
      ),
    },
  ], []);

  return (
    <section id="skills" className="relative mx-auto mt-16 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] px-3 min-[360px]:px-4 sm:px-6 md:mt-24 md:px-10 lg:px-16 xl:px-20">
      {/* Section Header */}
      <ScrollReveal direction="up" delay={100}>
        <div className="relative inline-flex items-center justify-center">
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-sky-400/20 p-[1px] border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="4" />
              <path d="M12 3v4" />
              <path d="M12 17v4" />
            </svg>
          </div>
        </div>

        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          My Skills
        </h2>
      </ScrollReveal>

      {/* Grid Content */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:mt-10 md:grid-cols-[1fr_2fr] md:gap-12 xl:gap-16">
        {/* Left Column: Philosophy */}
        <ScrollReveal direction="left" delay={200} className="text-base sm:text-lg md:text-xl text-white">
          <div className="font-semibold text-zinc-100">I build things for the people</div>
          <div className="mt-1.5 sm:mt-2 font-serif text-xl font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 sm:text-2xl md:text-3xl">
            I can Design, Develop, Deploy
          </div>
        </ScrollReveal>

        {/* Right Column: Narrative */}
        <ScrollReveal direction="right" delay={300} className="flex flex-col gap-3 sm:gap-4 text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg font-light">
          <p>
            My core focus is engineering high-performance, accessible, and scalable web solutions using modern full-stack architectures. I combine frontend craft with robust backend services, structured APIs, and optimized databases.
          </p>
          <p>
            I have a strong eye for clean, intuitive UI/UX design—building modern design systems from scratch with Tailwind CSS and creating seamless interactive experiences.
          </p>
        </ScrollReveal>
      </div>

      {/* Skills Categories Row */}
      <ScrollReveal direction="up" delay={200} className="mt-10 sm:mt-12 grid grid-cols-1 items-start gap-4 sm:gap-6 md:mt-16 md:grid-cols-[1fr_2fr] md:gap-14 xl:gap-20">
        <div className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-white">
          <h3 className="text-lg sm:text-xl font-semibold text-white">Skills</h3>
          <ArrowRight className="h-4 w-4 text-cyan-400" />
        </div>

        <nav className="flex flex-wrap items-center gap-2 sm:gap-3 text-zinc-300">
          {categories.map((cat) => {
            const isHovered = hoveredCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onMouseEnter={() => setHoveredCategory(cat)}
                onMouseLeave={() => setHoveredCategory(null)}
                onFocus={() => setHoveredCategory(cat)}
                onBlur={() => setHoveredCategory(null)}
                className={`cursor-pointer select-none rounded-lg px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-base font-medium transition-all duration-300 ${
                  isHovered
                    ? 'bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-[1.03]'
                    : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </nav>
      </ScrollReveal>

      {/* Work Stack Grid Row */}
      <ScrollReveal direction="up" delay={300} className="mt-10 sm:mt-12 grid grid-cols-1 items-start gap-4 sm:gap-6 md:mt-16 md:grid-cols-[1fr_2fr] md:gap-14 xl:gap-20">
        <div className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-white">
          <h3 className="text-lg sm:text-xl font-semibold text-white">Work Stack</h3>
          <ArrowRight className="h-4 w-4 text-cyan-400" />
        </div>

        <div className="grid grid-cols-2 gap-y-5 sm:gap-y-7 gap-x-3 sm:gap-x-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
          {workStack.map((tech) => {
            const isCategoryHighlighted = hoveredCategory !== null && tech.category === hoveredCategory;
            const isDimmed = hoveredCategory !== null && tech.category !== hoveredCategory;

            return (
              <div
                key={tech.name}
                className={`group flex max-w-fit items-center gap-2 sm:gap-3 border-b-2 pb-1 sm:pb-1.5 transition-all duration-200 ${
                  isCategoryHighlighted
                    ? 'border-cyan-400 text-white scale-[1.03] opacity-100'
                    : isDimmed
                    ? 'border-transparent text-zinc-600 opacity-40'
                    : 'border-transparent text-zinc-400 hover:border-cyan-400 hover:text-white hover:scale-[1.03]'
                }`}
              >
                <div
                  className={`transition-colors duration-200 ${
                    isCategoryHighlighted
                      ? 'text-cyan-400'
                      : isDimmed
                      ? 'text-zinc-700'
                      : 'text-zinc-400 group-hover:text-cyan-400'
                  }`}
                >
                  {tech.icon}
                </div>
                <span
                  className={`text-xs sm:text-base font-medium tracking-tight transition-colors duration-200 ${
                    isCategoryHighlighted
                      ? 'text-white font-semibold'
                      : isDimmed
                      ? 'text-zinc-600'
                      : 'group-hover:text-white'
                  }`}
                >
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
};
