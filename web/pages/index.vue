<template>
  <v-container>
    <v-row justify="center" class="mb-2">
      <v-col cols="auto" class="d-flex justify-center">
        <v-btn color="primary" href="https://github.com/Joshua-Lester3">
          <font-awesome-icon icon="fa-brands fa-github" />
          &nbsp;
          <span>
            GitHub
          </span>
        </v-btn>
      </v-col>
      <v-col cols="auto" class="d-flex justify-center">
        <v-btn color="primary" href="https://www.linkedin.com/in/joshua-lester-72232525a/">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          &nbsp;
          <span>
            LinkedIn
          </span>
        </v-btn>
      </v-col>
      <!-- <v-col cols="auto" class="d-flex justify-center">
        <v-btn color="primary" @click="router.push('contact')">
          <font-awesome-icon icon="fa-solid fa-address-card" />
          &nbsp;
          <span>
            Contact
          </span>
        </v-btn>
      </v-col> -->

    </v-row>
    <v-card class="mx-auto" elevation="3" color="tertiary" max-width="1000">
      <v-sheet color="secondary" class="d-flex justify-center ">
        <v-card-title class="text-h5">
          Joshua Lester
        </v-card-title>
      </v-sheet>

      <v-sheet color="primary" class="text-h6 py-1 pl-3">
        <div>
          Education
        </div>
      </v-sheet>
      <div class="py-1 pl-3">
        <v-row>
          <v-col>
            <div class="font-weight-bold">
              Eastern Washington University: Cheney, WA
            </div>
            <div class="font-italic">
              Bachelor of Science in Computer Science
            </div>
          </v-col>
          <v-col class="d-flex justify-end mr-3 font-italic">
            Sep 2020 - Jun 2026 (Expected)
            <br />
            GPA 3.95/4.00
          </v-col>
        </v-row>
      </div>
      <v-sheet color="primary" class="text-h6 py-1 pl-3">
        <div>
          Work Experience
        </div>
      </v-sheet>
      <div class="py-1 pl-3">
        <v-row>
          <v-col>
            <div class="font-weight-bold">
              Teaching Assistant
            </div>
            <div class="font-italic">
              Eastern Washington University &nbsp; | &nbsp; Cheney, WA
            </div>
          </v-col>
          <v-col cols="3" class="d-flex justify-end mr-3 font-italic">
            Sep 2024 - Present
          </v-col>
        </v-row>
        <ul class="mx-5">
          <li>
            Graded and tutored 15 EWU students on the C# language, unit testing, and object oriented programming,
            ensuring class understanding and
            timely, accurate grades
          </li>
          <li>
            Graded and tutored 30 EWU students in Relational Database Management Systems, using MySQL, on topics such as
            simple and complex
            queries, CRUD operations, and database design
          </li>
        </ul>
      </div>
      <div class="py-1 pl-3">
        <v-row>
          <v-col cols="auto">
            <div class="font-weight-bold">
              Scholar Lead
            </div>
            <div class="font-italic">
              Washington State Opportunity Scholarship &nbsp; | &nbsp; Seattle, WA
            </div>
          </v-col>
          <v-col class="d-flex justify-end mr-3 font-italic">
            Jun 2023 - Present
          </v-col>
        </v-row>

        <ul class="mx-5">
          <li>
            Facilitated a structured mentoring program for 14 freshmen and sophomore Scholars per year, fostering a
            sense of community, academic
            success, and personal development through community events, office hours, and check-ins with Scholars
          </li>
        </ul>
      </div>
      <v-sheet color="primary" class="text-h6 py-1 pl-3">
        <div>
          Projects
        </div>
      </v-sheet>
      <div class="py-1 pl-3">
        <v-row>
          <v-col cols="auto">
            <div class="font-weight-bold">
              Supporting Spokane Children
            </div>
          </v-col>
          <v-col class="d-flex justify-end mr-3 font-italic">
            Nov 2024
          </v-col>
        </v-row>
        <ul class="mx-5">
          <li>
            Built a web app for Gonzaga's 2024 Hackathon that hosts information for Spokane families with children with
            special healthcare needs on a full
            stack web application that uses Coalesce - a web framework that combines a Vue.js frontend and an ASP.NET
            Core backend
          </li>
          <li>
            Takes advantage of Azure Cloud Services and can store secret information and images in a blob storage
            service
          </li>
        </ul>
      </div>
      <div class="py-1 pl-3">
        <v-row>
          <v-col cols="auto">
            <div class="font-weight-bold">
              EWU Codefest Project
            </div>
          </v-col>
          <v-col class="d-flex justify-end mr-3 font-italic">
            Apr 2024
          </v-col>
        </v-row>
        <ul class="mx-5">
          <li>
            Collaborated on volunteer web application based on LinkedIn with two other teammates, ultimately presenting
            it and being judged at EWU's
            hackathon
          </li>
          <li>
            Learned on my own, before the hackathon, how to craft an application programming interface in ASP.NET Core
            with Entity Framework Core,
            acquiring knowledge on how to be a self-starter in the software development field
          </li>
        </ul>
      </div>
      <div class="py-1 pl-3">
        <v-row>
          <v-col cols="auto">
            <div class="font-weight-bold">
              Save Lyrics
            </div>
          </v-col>
          <v-col class="d-flex justify-end mr-3 font-italic">
            Jul 2024
          </v-col>
        </v-row>
        <ul class="mx-5">
          <li>
            Practiced the Flutter framework and Dart language to create a mobile application that uses third party API
            to search for songs and lyrics, with
            capabilities of saving the song and lyrics to local storage to read when there is no access to internet
          </li>
        </ul>
      </div>
      <v-sheet color="primary" class="text-h6 py-1 pl-3">
        <div>
          Languages & Technologies
        </div>
      </v-sheet>
      <div class="py-1 pl-3">
        <span class="font-weight-bold">
          Languages:
        </span>
        C# / .NET, C++, Java, TypeScript / JavaScript, SQL, Python , YAML, HTML, CSS, Dart, C, R
        <br />
        <span class="font-weight-bold">
          Technologies:
        </span>
        Git / GitHub , Azure, ASP.NET Core + Entity Framework Core, Apache Spark , Vue.js, Nuxt, Coalesce by
        IntelliTect, Flutter
      </div>
      <v-sheet color="primary" class="text-h6 py-1 pl-3">
        <div>
          Certifications
        </div>
      </v-sheet>
      <div class="py-1 pl-3">
        <v-row dense>
          <v-col cols="auto">
            <div class="font-weight-bold">
              AWS Certified Developer - Associate
            </div>
          </v-col>
          <v-col class="d-flex justify-end mr-3 font-italic">
            Mar 2025
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="auto">
            <div class="font-weight-bold">
              AWS Certified Cloud Practitioner
            </div>
          </v-col>
          <v-col class="d-flex justify-end mr-3 font-italic">
            Mar 2025
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="auto">
            <div class="font-weight-bold">
              Microsoft Certified: Azure Developer - Associate
            </div>
          </v-col>
          <v-col class="d-flex justify-end mr-3 font-italic">
            Feb 2025
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="auto">
            <div class="font-weight-bold">
              Microsoft Certified: Azure Fundamentals
            </div>
          </v-col>
          <v-col class="d-flex justify-end mr-3 font-italic">
            Mar 2025
          </v-col>
        </v-row>
      </div>
      <v-sheet color="primary" class="text-h6 py-1 pl-3">
        <div>
          Volunteer Work
        </div>
      </v-sheet>
      <div class="py-1 pl-3">
        <v-row>
          <v-col cols="auto">
            <div class="font-weight-bold">
              Open Source Contributor, Essential C# Website
            </div>
          </v-col>
          <v-col class="d-flex justify-end mr-3 font-italic">
            Sep 2024 - Feb 2025
          </v-col>
        </v-row>
        <ul class="mx-5">
          <li>
            Essential C# is a textbook written by Mark Michaelis of Spokane-based company IntelliTect teaching readers
            everything one needs to know
            about the C# language; the content is parsed to be sent to the publisher as well as the open source,
            not-for-profit website
          </li>
          <li>
            Fixed and added over 15 features total to both the essentialcsharp.com website repository and private
            repository for backend document
            processing, ensuring code quality and completed website features
            (https://github.com/IntelliTect/EssentialCSharp.Web)
          </li>
          <li>
            Completed features such as fixing up MSBuild and Github Actions pipeline to allow for open source
            contributions, fixing frontend ASP.NET
            Core styling bugs, and adding Entity Framework Core database table attribute for ordering of entities
          </li>
        </ul>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
const router = useRouter();
</script>
