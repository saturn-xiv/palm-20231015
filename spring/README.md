# SPRING

- [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Install Vagrant](https://developer.hashicorp.com/vagrant/docs/vagrantfile)
- Usage(**RUN IN spring FOLDER**)

  ```bash
  # start virtual machine
  VAGRANT_EXPERIMENTAL="disks" vagrant up --provider=virtualbox
  # list boxes
  vagrant box list
  # ssh login to the virtual machine
  vagrant ssh
  # shutdown the virtual machine
  vagrant halt
  # show virtualbox machines
  vagrant status
  ```
