const { Device } = require("../models");

const getAllDevices = async (req, res) => {
    const devices = await Device.findAll();
    res.json(devices);
};


const createDevice = async (req, res) => {
    try {
        const { name, type, ip, location } = req.body;

        const device = await Device.create({
            name,
            type,
            ip,
            location,
            status: 'inactive'
        });

        res.status(201).json(device);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const deleteDevice = async (req, res) => {
    const { id } = req.params;
    const deleted = await Device.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: "Device not found" });

    res.status(204).send();
};

const updateDeviceStatuses = async (req, res) => {
    try {
        const statuses = ['active', 'inactive', 'error'];

        const devices = await Device.findAll();
        for (const device of devices) {
            device.status = statuses[Math.floor(Math.random() * statuses.length)];
            await device.save();
        }

        res.status(200).json({ message: 'Device statuses updated.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllDevices, createDevice, deleteDevice, updateDeviceStatuses };