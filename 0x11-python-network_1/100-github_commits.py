#!/usr/bin/python3
"""
Python script that shows the last 10 commits of a repository
in GitHub
"""
import requests

import sys



def get_commits(repo, owner):

    # Base URL

    url = f"https://api.github.com/repos/{owner}/{repo}/commits"

    

    # Send GET request to the URL

    response = requests.get(url)

    

    # Check if the request was successful

    if response.status_code == 200:

        # Extract commits from the response

        commits = response.json()

        

        # Print 10 most recent commits

        for i in range(10):

            sha = commits[i]['sha']

            name = commits[i]['commit']['author']['name']

            print(f"{sha}: {name}")

    else:

        # If the request was not successful, print the error message

        print(f"Request failed with status code: {response.status_code}")
# Read the repository name and owner name from the command line arguments
repo = sys.argv[1]
owner = sys.argv[2]
# Call the get_commits function with the given repository and owner
get_commits(repo, owner)


